import { Box } from '@mui/material';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '../../utils/sort';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimation,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import Column from './ListColumns/Column/Column';
import Card from './ListColumns/Column/ListCards/Card/Card';

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
};

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
  const sensors = useSensors(pointerSensor);
  const [orderedColumn, setOrderedColumn] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemDate, setActiveDragItemData] = useState(null);

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
  }, [board]);

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN,
    );
    setActiveDragItemData(event?.active?.data?.current);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id != over.id) {
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id);

      const newIndex = orderedColumn.findIndex((c) => c._id === over.id);

      const dndOderedColumns = arrayMove(orderedColumn, oldIndex, newIndex);
      // const dndOderedColumnsIds = dndOderedColumns.map((c) => c._id);

      setOrderedColumn(dndOderedColumns);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} onDragStart={handleDragStart}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: (theme) => theme.trelloCustom.boardContentHeight,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          p: '10px 0',
        }}
      >
        {/* {Box column} */}

        <ListColumns columns={orderedColumn} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemDate} />}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemDate} />}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;

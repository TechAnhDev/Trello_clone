import Container from '@mui/material/Container';
import AppBar from '~/components/Appbar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', bgcolor: 'primary.main' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;

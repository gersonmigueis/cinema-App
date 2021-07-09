import React from 'react';
//import api from '../../services/api';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Container, CardContainer, Card, TableContainer } from './styles';

const Dashboard: React.FC = () => {

  return (
    <>
<Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <input type="text" name="name"></input>
              <Button text="Buscar"></Button>
            </header>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Filme</th>
              </tr>
            </thead>

            <tbody>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;

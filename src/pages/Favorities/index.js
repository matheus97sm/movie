import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, List } from '../Main/styles';

export default class Favorities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
      empty: true,
    };
  }

  componentDidMount() {
    // verificar se existe favoritos
    const hasFavority = JSON.parse(localStorage.getItem('favorities'));

    if (hasFavority) {
      hasFavority.forEach(async favority => {
        const { films } = this.state;

        const getFavority = await api.get(
          `/3/movie/${favority}?language=pt-BR`
        );

        films.push(getFavority.data);

        this.setState({
          loading: false,
          empty: false,
        });
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { films, loading, empty } = this.state;

    if (loading) {
      return (
        <Container>
          <FaSpinner color="#00a6ff" size="24" />
        </Container>
      );
    }
    if (empty) {
      return (
        <Container>
          <h2 style={{ marginTop: '30px', width: '90%', textAlign: 'center' }}>
            Você ainda não possui favoritos... :(
          </h2>
        </Container>
      );
    }

    return (
      <Container>
        <List>
          {films.map(film => (
            <li key={film.id} title={film.title}>
              <Link to={`/filme/${film.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  alt={film.title}
                />
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

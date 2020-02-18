import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, List } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const { films } = this.state;

    this.setState({
      loading: true,
    });

    const response = await api.get(`/4/list/1?language=pt-BR`);

    this.setState({
      films: [...films, ...response.data.results],
      loading: false,
    });
  }

  render() {
    const { films, loading } = this.state;

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

        {loading && <FaSpinner color="#00a6ff" size="24" />}
      </Container>
    );
  }
}

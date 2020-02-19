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
      page: 1,
      totalPages: 0,
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
      page: 2,
      totalPages: response.data.total_pages,
    });

    window.addEventListener('scroll', this.scrollLoad);
  }

  scrollLoad = async () => {
    if (
      window.scrollY + 100 >=
      document.body.clientHeight - window.innerHeight
    ) {
      const { films, page, totalPages } = this.state;

      if (page <= totalPages) {
        this.setState({
          loading: true,
        });

        window.removeEventListener('scroll', this.scrollLoad);

        const response = await api.get(`/4/list/1?page=${page}&language=pt-BR`);

        this.setState({
          films: [...films, ...response.data.results],
          loading: false,
          page: page + 1,
        });

        window.addEventListener('scroll', this.scrollLoad);
      } else {
        window.removeEventListener('scroll', this.scrollLoad);
      }
    }
  };

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

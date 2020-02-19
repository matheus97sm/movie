import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, List } from '../Main/styles';
import { SearchBar } from './styles';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      films: [],
      loading: false,
      page: 1,
      totalPages: 0,
    };
  }

  searchMovie = async e => {
    const { value } = e.target;

    if (value.length > 2) {
      this.setState({
        loading: true,
      });

      const response = await api.get(
        `/4/search/movie?language=pt-BR&query=${value}&page=1&include_adult=false`
      );

      const { results, page, total_pages: totalPages } = response.data;

      this.setState({
        search: value,
        films: results,
        loading: false,
        page: page + 1,
        totalPages,
      });

      window.addEventListener('scroll', this.scrollLoad);
    } else {
      this.setState({
        search: '',
        films: [],
      });
    }
  };

  scrollLoad = async () => {
    if (
      window.scrollY + 100 >=
      document.body.clientHeight - window.innerHeight
    ) {
      const { films, page, totalPages, search } = this.state;

      if (page <= totalPages) {
        this.setState({
          loading: true,
        });

        window.removeEventListener('scroll', this.scrollLoad);

        const response = await api.get(
          `/4/search/movie?language=pt-BR&query=${search}&page=${page}&include_adult=false`
        );

        const { results, page: pageAtual } = response.data;

        this.setState({
          films: [...films, ...results],
          loading: false,
          page: pageAtual + 1,
          totalPages,
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
      <>
        <Container>
          <List>
            {films &&
              films.map(film => (
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
        <SearchBar>
          <input
            type="text"
            placeholder="Digite aqui para pesquisar..."
            onChange={this.searchMovie}
          />
        </SearchBar>
      </>
    );
  }
}

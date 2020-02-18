import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaSpinner,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaHeart,
  FaRegHeart,
  FaArrowLeft,
} from 'react-icons/fa';

import api from '../../services/api';

import {
  Menu,
  Container,
  MovieCard,
  Details,
  FavorityButton,
  Resume,
} from './styles';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
      favority: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const movieId = match.params.id;

    // verificar se já é favorito
    const hasFavority = JSON.parse(localStorage.getItem('favorities'));

    if (hasFavority.find(index => index === movieId)) {
      this.setState({
        favority: true,
      });
    }

    const response = await api.get(`/3/movie/${movieId}?language=pt-BR`);

    this.setState({
      movie: response.data,
      loading: false,
    });
  }

  renderFilledStar = star => {
    return <FaStar key={star} color="#343F4B" size="20" />;
  };

  renderUnfilledStar = star => {
    return <FaRegStar key={star} color="#343F4B" size="20" />;
  };

  saveFavority = () => {
    const { favority } = this.state;

    if (favority) {
      this.setState({
        favority: false,
      });
    } else {
      this.setState({
        favority: true,
      });
    }

    const { match } = this.props;
    const movieId = match.params.id;

    const hasFavority = JSON.parse(localStorage.getItem('favorities'));

    let allFavorities = [];

    if (hasFavority) {
      if (hasFavority.find(index => index === movieId)) {
        hasFavority.splice(hasFavority.indexOf(movieId), 1);

        localStorage.setItem('favorities', JSON.stringify(hasFavority));
      } else {
        hasFavority.push(movieId);

        localStorage.setItem('favorities', JSON.stringify(hasFavority));
      }
    } else {
      allFavorities = [movieId];

      localStorage.setItem('favorities', JSON.stringify(allFavorities));
    }
  };

  render() {
    const { movie, loading, favority } = this.state;
    const starsFilled = [];
    const starsUnfilled = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(movie.vote_average / 2)) starsFilled.push(i);
      else if (i > 5 - Math.floor((10 - movie.vote_average) / 2))
        starsUnfilled.push(i);
    }

    if (loading) {
      return (
        <>
          <Menu>
            <Link to="/">
              <FaArrowLeft size="20" color="#fff" />
              <span>Carregando...</span>
            </Link>
          </Menu>
          <Container>
            <FaSpinner color="#00a6ff" size="24" />
          </Container>
        </>
      );
    }

    return (
      <>
        <Menu>
          <Link to="/">
            <FaArrowLeft size="20" color="#fff" />
            <span>{movie.title}</span>
          </Link>
        </Menu>
        <Container>
          <MovieCard>
            <header>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />

              <Details>
                <strong>{movie.release_date.split('-')[0]}</strong>
                <div>
                  {starsFilled.map(star => this.renderFilledStar(star))}
                  {!!(movie.vote_average % 2) && (
                    <FaStarHalfAlt color="#343F4B" size="20" />
                  )}
                  {starsUnfilled.map(star => this.renderUnfilledStar(star))}
                </div>
              </Details>
            </header>
            <article>
              <FavorityButton onClick={this.saveFavority}>
                {favority ? <FaHeart size="20" /> : <FaRegHeart size="20" />}
                <span>Adicionar aos favoritos</span>
              </FavorityButton>

              <Resume>{movie.overview}</Resume>
            </article>
          </MovieCard>
        </Container>
      </>
    );
  }
}

Component.propTypes = propTypes;

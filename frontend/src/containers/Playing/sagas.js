import { call, put, takeLatest } from 'redux-saga/effects';
import {
  INIT_GAME,
  INIT_GAME_SUCCESS,
  INIT_GAME_ERROR,
  GET_GAME_MOVES,
  GET_GAME_MOVES_SUCCESS,
  GET_GAME_MOVES_ERROR,
  GET_WINNER,
  GET_WINNER_SUCCESS,
  GET_WINNER_ERROR
} from './constants';

import {
  initGameApi,
  getGameMovesApi,
  getWinnerApi,
} from './api';

function* gameWorker(payload) {
  try {
    const data = yield call(initGameApi, payload.payload);
    yield put({ type: INIT_GAME_SUCCESS, payload: data.game });
  } catch (e) {
    yield put({ type: INIT_GAME_ERROR, payload: e });
  }
}

function* getGameMovesWorker() {
  try {
    const data = yield call(getGameMovesApi);
    yield put({ type: GET_GAME_MOVES_SUCCESS, payload: data.moves });
  } catch (e) {
    yield put({ type: GET_GAME_MOVES_ERROR, payload: e });
  }
}

function* getWinnerWorker(payload) {
  try {
    const data = yield call(getWinnerApi, payload.payload);
    console.log({data});
    yield put({ type: GET_WINNER_SUCCESS, payload: data.game });
  } catch (e) {
    yield put({ type: GET_WINNER_ERROR, payload: e });
  }
}

export function* gameWatcher() {
  yield takeLatest(INIT_GAME, gameWorker);
}

export function* getGameMovesWatcher() {
  yield takeLatest(GET_GAME_MOVES, getGameMovesWorker);
}

export function* getWinnerWatcher() {
  yield takeLatest(GET_WINNER, getWinnerWorker);
}

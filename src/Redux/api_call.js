import axios from 'axios'
import { API_URL } from './../constants'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => axios.get(API_URL)

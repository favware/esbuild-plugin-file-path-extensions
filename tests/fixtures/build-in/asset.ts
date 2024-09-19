import './asset.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './asset.module.css';
import json from './asset.json';

export function test() {
  console.log('styles', styles);
  console.log('json', json);
}

import * as fs from 'fs';
import * as path from 'path';
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve('.env');
  const prodEnv = path.resolve('.env.prod');

  // 判断本地是否存在环境变量的路径
  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件！');
  }

  const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
  return { path: filePath };
}

export default parseEnv();

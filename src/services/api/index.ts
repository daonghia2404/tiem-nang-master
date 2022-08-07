import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const ApiService = AuthorizedInstance(env.api.baseUrl.service);

export default ApiService;
export * from './auth';
export * from './profile';
export * from './upload';
export * from './advisory';
export * from './membership';
export * from './notification';
export * from './mood';
export * from './apophthgan';
export * from './product';
export * from './category';
export * from './transaction';
export * from './appellation';
export * from './banking';

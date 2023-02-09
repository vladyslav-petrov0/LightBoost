import { useContext } from 'react';
import { ServiceContext } from '../context/ServiceContext.js';

export const useService = () => {
  const service = useContext(ServiceContext);
  return service;
};

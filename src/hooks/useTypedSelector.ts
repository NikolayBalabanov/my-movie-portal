import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootState } from 'redux/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

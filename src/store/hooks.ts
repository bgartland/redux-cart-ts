import { useDispatch } from "react-redux";
import { AddDispatch } from "./store";

type DispatchFunction = () => AddDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

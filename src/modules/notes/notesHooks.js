import { useDispatch, useSelector } from "react-redux";
import { fetch } from "./notesAction";

export const useFetchNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/fetch"].loading);
    const error = useSelector((state) => state["notes/fetch"].error);
    const data = useSelector((state) => state["notes/fetch"].data);

    const fetchNotes = async() => {
        await dispatch(fetch());
    }

    return {
        loading,
        error,
        data,
        fetchNotes
    }
};
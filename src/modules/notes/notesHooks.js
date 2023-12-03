import { useDispatch, useSelector } from "react-redux";
import { create, fetch } from "./notesAction";

export const useFetchNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/fetch"].loading);
    const error = useSelector((state) => state["notes/fetch"].error);
    const data = useSelector((state) => state["notes/fetch"].data);

    const fetchNotes = async () => {
        await dispatch(fetch());
    }

    return {
        loading,
        error,
        data,
        fetchNotes
    }
};

export const useCreateNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/create"].loading);
    const error = useSelector((state) => state["notes/create"].error);
    const data = useSelector((state) => state["notes/create"].data);

    const createNotes = async (data) => {
        await dispatch(create(data));
    }

    return {
        loading,
        error,
        data,
        createNotes
    }
};
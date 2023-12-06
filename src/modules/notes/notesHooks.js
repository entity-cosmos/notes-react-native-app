import { useDispatch, useSelector } from "react-redux";
import { create, deleteNote, fetch, update } from "./notesAction";

export const useFetchNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/fetch"].loading);
    const error = useSelector((state) => state["notes/fetch"].error);
    const data = useSelector((state) => state["notes/fetch"].data);

    const fetchNotes = async () => {
        dispatch(fetch());
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
        dispatch(create(data));
    }

    return {
        loading,
        error,
        data,
        createNotes
    }
};

export const useUpdateNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/update"].loading);
    const error = useSelector((state) => state["notes/update"].error);
    const data = useSelector((state) => state["notes/update"].data);

    const updateNotes = async (data) => {
        dispatch(update(data));
    }

    return {
        loading,
        error,
        data,
        updateNotes
    }
};

export const useDeleteNotes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state["notes/delete"].loading);
    const error = useSelector((state) => state["notes/delete"].error);
    const data = useSelector((state) => state["notes/delete"].data);

    const deleteNotes = async (data) => {
        dispatch(deleteNote(data));
    }

    return {
        loading,
        error,
        data,
        deleteNotes
    }
};
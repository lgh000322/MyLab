import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

function getNum(param, defaultValue) {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param);
}
const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    const queryDefault = createSearchParams({ page, size }).toString();
    const moveToList = (pageParam) => {
        let queryStr = "";

        if (pageParam) {
            const pageNum = getNum(queryParams.get("page"), 1)
            const sizeNum = getNum(queryParams.get('size'), 10)

            queryStr = createSearchParams({ page: pageNum, size: sizeNum })
        } else {
            queryStr = queryDefault;
        }

        navigate({ pathname: "../list", search: queryStr })
    }

    const moveToModify=(tno)=>{
        navigate({
            pathname: `../modify/${tno}`,
            search: queryDefault
        })
    }

    return { moveToList,moveToModify,page,size }

}

export default useCustomMove;
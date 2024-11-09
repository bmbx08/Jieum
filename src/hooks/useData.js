
import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

// const fetchPopularMovies=()=>{
//     return api.get(`/movie/popular`)
// }

// export const usePopularMoviesQuery=()=>{
//     return useQuery({
//         queryKey:['movie-popular'],
//         queryFn:fetchPopularMovies,
//         select: (result)=>result.data  //데이터 가져오기 간편화
//     })
// }

//사용할 때는 const {data} = usePopularMoviesQuery();
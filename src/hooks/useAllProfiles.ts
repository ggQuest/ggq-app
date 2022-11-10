import useFetch from "./useFetch"


const useAllProfiles = () => {
    const [questIds] = useFetch("https://gg.quest/api/profiles/")
    return questIds
}

export default useAllProfiles
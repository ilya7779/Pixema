import {useSelector} from "react-redux";
import {userEmailSelector, userIDSelector, userTokenSelector} from "../store/selectors";

export function useAuth() {
  const email = useSelector(userEmailSelector)
  const token = useSelector(userIDSelector)
  const id = useSelector(userTokenSelector)
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
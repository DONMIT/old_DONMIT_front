import Button from "@/components/common/Button";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const HistoryBack = () => {
    router.back();
  }
  return(
    <>
      <div>404 NotFound</div>
      <div>
        <Button txt={"뒤로가기"} event={HistoryBack}/>
      </div>
    </>
  )
}

export default NotFound;
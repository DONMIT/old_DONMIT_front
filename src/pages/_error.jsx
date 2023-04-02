import Button from "@/components/common/Button";
import { useRouter } from "next/router";

const Error = () => {
  return(
    <>
      <div>잘못된 페이지 입니다.</div>
      <div>
        <Button txt={"뒤로가기"} event={HistoryBack}/>
      </div>
    </>
  )
}
export default Error;
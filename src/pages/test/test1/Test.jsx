import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const path = router.query;
  console.log(router)
  return(
    <>
      <div>{path.title}</div>
    </>
  )
}

export default Test;
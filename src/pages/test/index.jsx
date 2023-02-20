import Link from "next/link";
import Test from "./test1/Test";

export const TestArry = [
    {
      id: 1,
      name: "즐거운 리액트"
    },
    {
      id: 2,
      name: "머리아픈 리액트"
    }
  ];



const Index = () => {
  return(
    <>
      <div>Link 사용</div>
      <Link 
        href={
          {
            pathname:"test/test1/Test",
            query:
              {
                title:"페이지이름",
                name: TestArry
              },
            }
        } 
        as={"Test"}>이동 링크 쿼리숨기기</Link>
        <br />
        <Link 
        href={
          {
            pathname:"test/test1/Test",
            query:
              {
                title:"페이지이름",
                name: TestArry
              },
            }
        }>이동 링크 쿼리 노출</Link>
    </>
  )
}

export default Index;
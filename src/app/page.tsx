import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">FE9 Advanced Project Template</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login" className="text-blue-500 hover:underline">
              로그인
            </Link>
          </li>
          <li>
            <Link href="/signup" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

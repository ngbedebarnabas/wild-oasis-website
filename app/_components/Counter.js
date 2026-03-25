"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  <p>There are {users.length} users in the application.</p>;

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

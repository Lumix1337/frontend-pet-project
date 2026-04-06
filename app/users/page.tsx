"use client"

import { useEffect, useState } from "react";
import { fetchUsers } from "@/lib/api";
import { User } from "@/types/user";


export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-10 text-center">Загрузка пользователей...</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Пользователи (Test)</h1>
      
      {users.length === 0 ? (
        <p className="text-gray-500 text-center py-10 border-2 border-dashed rounded-xl">
          В базе пока никого нет.
        </p>
      ) : (
        <div className="grid gap-4">
        {users.map((user: User) => (
          <div key={user._id} className="p-4 border rounded-lg shadow-sm bg-white mb-2">
            <div className="flex justify-between items-center">
              <div>
                {/* Используем новые поля firstName и lastName */}
                <p className="text-lg font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              
              {/* Отображаем роль */}
              <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                {user.role}
              </span>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}
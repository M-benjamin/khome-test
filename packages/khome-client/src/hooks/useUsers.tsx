import { useCallback, useEffect, useState } from "react"

import {
  httpGetUsers,
  httpGetUser,
  httpCreateUser,
  httpUpdateUser,
  httpDeleteUser
} from "../api/userRequests"

function useUsers() {
  const [users, saveUsers] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getUsers = useCallback(async () => {
    const fetchedUsers = await httpGetUsers()
    console.log("fetchedUsers:::::::::", fetchedUsers)
    saveUsers(fetchedUsers)
  }, [httpGetUsers, saveUsers])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const createUser = useCallback(
    async (values: any) => {
      // e.preventDefault()
      setLoading(true)

      const { firstname, lastname, email } = values

      console.log("DATA CREATE", firstname, lastname, email)

      const response = await httpCreateUser({
        firstname,
        lastname,
        email
      })

      const success = response.ok

      if (success) {
        console.log("INSIDE =====")
        getUsers()
        setTimeout(() => {
          setLoading(false)
        }, 800)
      } else {
        //fialed
      }
    },
    [getUsers]
  )

  const updateUser = useCallback(
    async (values: any) => {
      // e.preventDefault()
      setLoading(true)

      const { firstname, lastname, email, _id } = values

      console.log("DATA UPDATE", firstname, lastname, email, _id)

      const response = await httpUpdateUser(
        {
          firstname,
          lastname,
          email
        },
        _id
      )

      const success = response.ok

      if (success) {
        getUsers()
        setTimeout(() => {
          setLoading(false)
        }, 800)
      } else {
        //fialed
      }
    },
    [getUsers]
  )

  const deleteUser = useCallback(
    async (id: string) => {
      const response = await httpDeleteUser(id)

      const success = response.ok
      if (success) {
        console.log("DELETE USER")
        getUsers()
      } else {
        //
      }
    },
    [getUsers]
  )

  return {
    users,
    isLoading,
    createUser,
    updateUser,
    deleteUser
  }
}

export default useUsers

import { User } from "../types"

const API_URL = "http://localhost:5000"
// Load Users and return as JSON.
async function httpGetUsers() {
  const response = await fetch(`${API_URL}/users`)
  console.log("RESPONSE httpGetUsers", response)
  return await response.json()
}

// Load One user
async function httpGetUser(id: string) {
  const response = await fetch(`${API_URL}/users/${id}`)
  console.log("RSPONSE", response)
  return await response.json()
}

// Submit user
async function httpCreateUser(user: any) {
  try {
    return await fetch(`${API_URL}/users`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(user)
    })
  } catch (error) {
    return {
      ok: false
    }
  }
}

// Update user
async function httpUpdateUser(user: any, id: string) {
  try {
    return await fetch(`${API_URL}/users/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(user)
    })
  } catch (error) {
    return {
      ok: false
    }
  }
}

// Delete User.
async function httpDeleteUser(id: string) {
  try {
    return await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE"
    })
  } catch (error) {
    return {
      ok: false
    }
  }
}

export {
  httpGetUsers,
  httpGetUser,
  httpCreateUser,
  httpUpdateUser,
  httpDeleteUser
}

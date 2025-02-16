import Cookie from 'js-cookie'
import axios from "axios"
import { envApi, envOAuth } from "./env"

export const GET_WITH_TOKEN = (path, params) => {
    const getToken = Cookie.get("user-token")

    const header = {
        Authorization: `Bearer ${getToken || null}`,
        'Content-Type': 'application/json'
    }
    const setParams = {
        ...params
    }
    return new Promise((resolve, reject) => {
        axios.get(
            `${envApi}${path}`,
            {
                headers: header,
                params: setParams
            }
        ).then((response) => {
            if (response.status === 200) {
                return resolve(response?.data)
            }
            const error = response?.statusText
            return reject(error)
        })
            .catch((err) => {
                const error = err?.response?.message
                return reject(error)
            })
    })
}

export const POST_AUTH = (path, payload) => {
    const header = {
        'Content-Type': 'application/json'
    }
    return new Promise((resolve, reject) => {
        axios.post(
            `${envOAuth}${path}`,
            payload,
            { headers: header }
        ).then((response) => {
            if (response.status === 200) {
                resolve(response?.data)
            }
            const error = response?.statusText
            reject(error)
        })
            .catch((err) => {
                const error = err?.response?.data?.message
                return reject(error)
            })
    })
}

export const POST = (path, payload) => {
    const getToken = Cookie.get("user-token")
    const header = {
        Authorization: `Bearer ${getToken || null}`,
    };
    return new Promise((resolve, reject) => {
        axios
            .post(`${envApi}${path}`, payload, {
                headers: header,
            })
            .then((response) => {
                if (response.status === 200) {
                    return resolve(response.data);
                }
                const error = response?.response?.data?.message;
                return reject(error);
            })
            .catch((err) => {
                const error = err?.response?.data?.message
                return reject(error);
            });
    });
};

export const PUT = (path, payload) => {
    const getToken = Cookie.get("user-token")
    const header = {
        Authorization: `Bearer ${getToken || null}`,
    };
    return new Promise((resolve, reject) => {
        axios
            .put(`${envApi}${path}`, payload, {
                headers: header,
            })
            .then((response) => {
                if (response.status === 200) {
                    return resolve(response.data);
                }
                const error = response?.response?.data?.message;
                return reject(error);
            })
            .catch((err) => {
                const error = err?.response?.data?.message
                return reject(error);
            });
    });
};

export const UPLOAD = async (path, payload) => {
    const getToken = Cookie.get('user-token');
    return new Promise((resolve, reject) => {
      const data = new FormData();
      for (const [val, name] of Object.entries(payload)) {
        data.append(val, name);
      }
      axios
        .post(`${envApi}${path}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken || null}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return resolve(response.data);
          }
          const error = response?.response?.data?.message;
          return reject(error);
        })
        .catch((err) => {
          const error = err?.response?.data?.message
          return reject(error);
        });
    });
  };
export const UPLOAD_PUT = async (path, payload) => {
    const getToken = Cookie.get('user-token');
    return new Promise((resolve, reject) => {
      const data = new FormData();
      for (const [val, name] of Object.entries(payload)) {
        data.append(val, name);
      }
      axios
        .put(`${envApi}${path}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken || null}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return resolve(response.data);
          }
          const error = response?.response?.data?.message;
          return reject(error);
        })
        .catch((err) => {
          const error = err?.response?.data?.message
          return reject(error);
        });
    });
  };
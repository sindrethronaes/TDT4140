import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v2";

export type Route = {
  route_id: number;
  duration: string;
  destination: string;
  //time_published: Date;
};

export type travel_point = {
  travel_point_id: number;
  destination: string;
  continent: string;
};

export type route_travel_point = {
  route_id: number;
  travel_point_id: number;
  order_number: number;
  // user_profile_id: number;
};

class RouteService {
  /**
   * Get task with given id.
   */
  get(id: number) {
    return axios.get<Route>("/routes/" + id).then((response) => response.data);
  }

  getAll() {
    return axios.get<Route[]>("/routes").then((response) => response.data);
  }

  // createRoute(
  //   destination: string,
  //   continent: string,
  //   duration: string,
  //   estimated_price: string
  //   // order_number: number
  // ) {
  //   return axios
  //     .post("/routes/add", {
  //       destination: destination,
  //       continent: continent,
  //       duration: duration,
  //       estimated_price: estimated_price,
  //       // order_number: order_number,
  //     })
  //     .then((response) => response.data);
  // }

  createRoute(
    duration: string,
    estimated_price: string //order_number: numbe)
  ) {
    return axios
      .post("/routes", {
        duration: duration,
        estimated_price: estimated_price,
      })
      .then((response) => response.data);
  }

  createTravelPoint(destination: string, continent: string) {
    return axios
      .post("/travel_points", {
        destination: destination,
        continent: continent,
      })
      .then((response) => response.data);
  }

  createRouteTravelPoint(
    route_id: number,
    travel_point_id: number,
    order_number: number
  ) {
    return axios
      .post("/route_travel_points", {
        route_id: route_id,
        travel_point_id: travel_point_id,
        order_number: order_number,
      })
      .then((response) => response.data);
  }
}

const routeService = new RouteService();
export default routeService;

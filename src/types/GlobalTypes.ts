export type ICamera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

export type IRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: ICamera[];
};

export type IPhotos = {
  id: number;
  sol: number;
  camera: ICamera[];
  img_src: string;
  earth_date: string;
};

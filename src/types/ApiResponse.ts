export type ApiResponse={
   isSuccessful:boolean;
   status:number;
   message: string;
}

export const defaultApiResponse = {
    isSuccessful:false,
   status:0,
   message: ""
}
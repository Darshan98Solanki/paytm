import { User } from "./User";

export function Users() {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light mt-10">
              <tbody>
                <User fname={"Darshan"} lname={"Solanki"}/>
                <User fname={"Harkirat"} lname={"Singh"}/>
                <User fname={"Harsh"} lname={"Ramwani"}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

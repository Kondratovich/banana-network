import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => {
          return (
            <User
              user={u}
              key={u.id}
              followingInProgress={followingInProgress}
              unfollow={unfollow}
              follow={follow}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Users;

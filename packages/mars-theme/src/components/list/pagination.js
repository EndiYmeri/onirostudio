import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions}) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous, page } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <PaginationDiv>
      {/* If there's a previous page, render this link */}
      {previous && (
        <Link link={previous}>
          <Text>← Previos Page</Text>
        </Link>
      )}
      {previous && next && `Page ${page}`}
      {/* If there's a next page, render this link */}
      {next && (
      <Link link={next}>
        <Text>Next Page  →</Text>
      </Link>
      )}
    </PaginationDiv>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const PaginationDiv = styled.div`
    color: white;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
  a{
    color: #fc4523 !important;
  }
`

const Text = styled.em`
  display: inline-block;
`;

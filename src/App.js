import "./App.css";
import useFetch from "./hooks/useFetch";
import { useState, useEffect, Suspense, lazy } from "react";
const ModalWrapperComponent = lazy(() =>
  import("./components/Modal/ModalWrapper.js")
);
const MessagesListComponent = lazy(() =>
  import("./components/MessagesLists/MessagesList.js")
);
const PaginationComponent = lazy(() =>
  import("./components/Pagination/Pagination.js")
);
const ModalComponent = lazy(() => import("./components/Modal/Modal.js"));
const HeaderComponent = lazy(() => import("./components/Header/Header.js"));

function App() {
  const { data, postMessage, deleteMessages, deleteMessage } = useFetch();
  const [postsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [messageData, setMessageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortMessages, setIsSortMessages] = useState(false);

  useEffect(() => {
    // Get current page data
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data
      ?.sort((a, b) =>
        isSortMessages
          ? new Date(b?.timestamp).getTime() - new Date(a?.timestamp).getTime()
          : new Date(a?.timestamp).getTime() - new Date(b?.timestamp).getTime()
      )
      ?.slice(indexOfFirstPost, indexOfLastPost);
    setMessageData(currentPosts);
    setCurrentPage(
      currentPage > Math.ceil(data?.length / postsPerPage) ? 1 : currentPage
    );
  }, [currentPage, data, isSortMessages, postsPerPage]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // set current 0 if user click on sortBtn
  const handlerSortMessage = (_) => {
    setIsSortMessages((prev) => !prev);
    setCurrentPage(1);
  };

  const handlerPostMessage = (messageId) => {
    postMessage(messageId);
  };

  const handlerDeleteMessage = (messageId) => {
    deleteMessage(messageId);
  };

  const handlerDeleteMessages = (_) => {
    deleteMessages();
    toggleModal();
  };

  const toggleModal = (_) => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderComponent
            handlerSortMessage={handlerSortMessage}
            postMessage={handlerPostMessage}
            deleteMessages={handlerDeleteMessages}
            toggleModal={toggleModal}
            disabled={!data?.length}
          />
        </Suspense>
        {data?.length ? (
          <Suspense fallback={<div>Loading...</div>}>
            {messageData?.length ? (
              <MessagesListComponent
                deleteMessage={handlerDeleteMessage}
                messageData={messageData}
              />
            ) : null}
            <PaginationComponent
              postsPerPage={postsPerPage}
              totalPosts={data?.length}
              currentPageNumber={currentPage}
              paginate={paginate}
            />
          </Suspense>
        ) : null}
        {showModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <ModalComponent>
              <ModalWrapperComponent
                handlerDeleteMessages={handlerDeleteMessages}
                toggleModal={toggleModal}
              />
            </ModalComponent>
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;

import React, { useRef, useEffect, Dispatch, SetStateAction } from 'react';

interface LoadMoreProps {
  setPage: Dispatch<SetStateAction<number>>;
}

function LoadMore({ setPage }: LoadMoreProps) {
  const loadMoreTrigger = useRef<any>(null);
  const loadMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage(page => page + 5);
  });

  useEffect(() => {
    const { current } = loadMoreTrigger;
    loadMoreObserver.observe(current);
    return () => {
      loadMoreObserver.unobserve(current);
    };
  }, [loadMoreObserver, loadMoreTrigger]);

  return <div id="loadMore" ref={loadMoreTrigger} />;
}

export default LoadMore;

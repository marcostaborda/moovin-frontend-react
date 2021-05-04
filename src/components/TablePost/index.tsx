import React, { useCallback, useMemo } from 'react';
import { PostsData } from '../../contracts/IPostsData';
import styles from './styles.module.scss'

interface TablePosts {
  posts?: PostsData;
  handleChangePage(setPage: number): void;
  perPage?: number;
}

export function TablePost({ posts, handleChangePage, perPage = 4 }: TablePosts) {
  const countPostDisplay = useMemo((): number => {
    if (posts)
      return posts.data.length
    else
      return 0;
  }, [posts]);

  const pageBack = useMemo((): number => {
    if (posts)
      return (posts.meta.pagination.page - 1)
    else
      return 0;
  }, [posts])

  const handleNextPage = useCallback(() => {
    if (posts) {
      const pageBack = (posts.meta.pagination.page + 1)
      if (pageBack <= posts.meta.pagination.pages)
        handleChangePage(pageBack)
    }
  }, [handleChangePage, posts]);

  const pagesNumber = useMemo(() => {
    if (!posts) {
      return [];
    }
    const offset = perPage - 1;
    const pagination = posts.meta.pagination;
    let from = pagination.page - offset;

    if (from < 1) {
      from = 1;
    }

    let to = from + offset;

    if (to >= pagination.pages) {
      to = pagination.pages;
    }

    let pagesArray = [];

    for (let page = from; page <= to; page++) {
      pagesArray.push(page);
    }

    return pagesArray;
  }, [posts, perPage])

  return (
    <section className={styles.sectionContainer}>
      {posts && (
        <>
          <table className={styles.tableContainer}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              {posts.data.map(post => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className={styles.footerTable}>
            <div>
              Exibindo {countPostDisplay} postagens
            </div>
            <div>
              <div className={styles.buttonsPagination}>
                <button onClick={() => { pageBack > 0 && handleChangePage(pageBack) }} className={pageBack === 0 ? styles.notClicked : ''}>
                  <img src="/images/backIcon.svg" alt="Voltar uma página" />
                </button>
                {pagesNumber.map(page => (
                  <button key={page} onClick={() => handleChangePage(page)} className={page === posts.meta.pagination.page ? styles.isActive : ''}>{page}</button>
                ))}
                <button onClick={handleNextPage}>
                  <img src="/images/nextIcon.svg" alt="Avançar uma página" />
                </button>
              </div>
            </div>
          </footer>
        </>
      )}
    </section>
  )
}
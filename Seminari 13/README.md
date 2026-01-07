
Arhitectura sistemului
┌─────────────────────────────────────────────────────────────────┐
│                       CLIENT (React)                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    COMPONENTE UI                         │  │
│   │                                                          │  │
│   │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │  │
│   │   │  DataTable  │  │   Dialog    │  │   Chart     │     │  │
│   │   │  (PrimeReact)│  │  (PrimeReact)│  │(GoogleCharts)│    │  │
│   │   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │  │
│   │          │                │                │             │  │
│   │          └────────────────┼────────────────┘             │  │
│   │                           │                              │  │
│   │                    useSelector()                         │  │
│   │                           │                              │  │
│   └───────────────────────────┼──────────────────────────────┘  │
│                               │                                  │
│   ┌───────────────────────────┼──────────────────────────────┐  │
│   │                     REDUX STORE                           │  │
│   │                           │                               │  │
│   │   ┌───────────────────────┴───────────────────────────┐  │  │
│   │   │                    REDUCER                         │  │  │
│   │   │                                                    │  │  │
│   │   │   bookList: []     fetching: false                 │  │  │
│   │   │   count: 0         error: null                     │  │  │
│   │   │   stats: null      statsLoading: false             │  │  │
│   │   └────────────────────────┬──────────────────────────┘  │  │
│   │                            │                              │  │
│   │                       dispatch()                          │  │
│   │                            │                              │  │
│   └────────────────────────────┼──────────────────────────────┘  │
│                                │                                  │
│   ┌────────────────────────────┼──────────────────────────────┐  │
│   │                      ACTIONS (thunk)                       │  │
│   │                            │                               │  │
│   │   getBooks(query)    addBook()    saveBook()    getStats() │  │
│   │        │                 │            │             │      │  │
│   │        └─────────────────┴────────────┴─────────────┘      │  │
│   │                          │                                  │  │
│   └──────────────────────────┼──────────────────────────────────┘  │
│                              │                                      │
└──────────────────────────────┼──────────────────────────────────────┘
                               │ HTTP (fetch)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        SERVER (Express)                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   GET  /books?title=...&content=...&first=0&rows=5&sortField=...    │
│   POST /books                                                        │
│   PUT  /books/:id                                                    │
│   DELETE /books/:id                                                  │
│   GET  /books/stats?title=...&content=...                           │
│                                                                      │
│   ┌────────────────────────────────────────────────────────────┐    │
│   │                    PIPELINE PROCESARE                       │    │
│   │                                                             │    │
│   │   Request → filterBooks() → applySorting() → slice() → Res │    │
│   │                                                             │    │
│   └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│   ┌────────────────────────────────────────────────────────────┐    │
│   │                    IN-MEMORY DATABASE                       │    │
│   │                                                             │    │
│   │   let books = [ { id, title, content, pages }, ... ]        │    │
│   │                                                             │    │
│   └────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

Kit simplificat cu 4 proiecte separate:
----------------------------------------

Folder 	       Concept 	               Port Client 	Port Server
S13v1/ 	DataTable + Dialog + căutare 	   3000 	       8080
S13v2/ 	Filtrare pe coloană + paginare 	 3002 	       8082
S13v3/ 	Sortare (numerică) 	             3003 	       8083
S13v4/ 	Grafice în Dialog 	             3004 	       8084


Ghid de parcurgere - exemplu S13v2
----------------------------------
1. Dezarhivează S13.zip
       ↓
2. cd S13v2/frontend; npm install; intr-un nou terminal: cd S13v2/server; npm install
       ↓
4. npm start in fiecare terminal (frontend si server)
       ↓
5. Deschide http://localhost:3002 
       ↓
6. Pentru fiecare pas:
   • Testează aplicația în browser
   • Studiază codul în VS Code
       ↓

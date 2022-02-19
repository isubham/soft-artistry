import requests
from bs4 import BeautifulSoup
from bs4 import PageElement

'''
practising oops concepts in python

3rd sept 2020

- [ ] class, class attributes, 
- [ ] encapsulation
- [ ] inheritance
- [ ] polymorphism
- [ ] operator overloading

'''


class crawler:

    purpose = 'fetch a page by its url'

    def __init__(self, url = None):
        self.url = url
        self.soup : BeautifulSoup = None
        self.selected : PageElement = None

    def __str__(self):
        return f'(url => {self.url}  fetched =>  {self.soup != None})'

    def set_url(self, url):
        self.url = url

    def get(self):
        page = requests.get(self.url)
        self.soup = BeautifulSoup(page.content, 'html.parser')
        return self.soup

    def find_by_id(self, id):
        results = self.soup.find(id=id)
        print(results.prettify)
        return results

    def find_by_class(self, class_name):
        results = self.soup.find(class_=class_name)
        return results

    def find_by_tag(self, tag):
        pass
        

    def find_by_classname(self, element_type, class_name, element):
        element.find_all(element_type, class_=class_name)
        

    def get_text(self, element):
        return element.text


class bfs_crawler(crawler):
    """
    A class to recursively crawl webpages in BFS order

    ...

    Attributes
    ----------
    __links_to_crawl : list
        list to maintain which url need to be crawled
    __visited : set
        set to maintain which are already visited

    Methods
    -------
    get()
        Fetches the page and related pages in BFS manner
        store the webpages 
    """
    

    def __init__(self, url):
        super().__init__(url)
        '''
       
        '''
        self.__links_to_crawl = [url] 
        self.__visited = {}


    '''
    webpage network

    a <--->b---->e
    |\    > \
    | \  /   \
    >  >/     >
    c-- d      f

    start page => a

    sequence

    maintain which are already visited = [a]

    visit a
        page to visit = [b, c, d]
        pop it to visisted  
        visit b
            add pafe ro visit = [e, f, a] to 
            a is already visited so dont visit

        vist c
        visit d


    '''
    
    def get(self):
        '''
        fetch page => find all the links
        '''
        # get get webpage and add it in __visited
        super().get()
        # find the links in page and add those in __link_to_crawl
        self.__links_to_crawl.extend(self.links_in_page())
        # call this method recursively on __link_to_crawl
    

    def links_in_page(self):
        return self.soup.findall('a')
    


class logger:
    
    def __init__(self, log_location):
        self.__log_location = log_location
        self.__log_file = open(log_location, "a")


    def save(self, lines_to_save):
        for line in lines_to_save:
            self.__log_file.write(line)
    
    def close_file(self):
        self.__log_file.close()



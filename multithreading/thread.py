import time
from threading import Thread
import multiprocessing
import concurrent.futures
import os




def timer_print(func):
    def inner(*args, **kwargs):
        print("-"*40)
        print(func.__name__)
        t1 = time.perf_counter()
        func(*args, **kwargs)
        t2 = time.perf_counter()
        print(t2 - t1, "seconds")
        print("-"*40)
    return inner


class Work:

    counter = 0
    
    @staticmethod
    def io_work(i):
        ''' an io, db call  '''
        print(i, f"counter ({Work.counter}) work started")
        Work.counter += 1
        time.sleep(1)
        print(i, f"work ({Work.counter}) completed")
        return Work.counter


    @staticmethod
    def cpu_work(j):
        sum = 0
        for i in range(10000):
            for j in range(1000):
                sum += i * j
        return sum
    

    @staticmethod
    def test_nginx_docker_image(i):
        os.system("curl -4 localhost:8080")        


class Execution:

    def __init__(self, reps, work) -> None:
        self.reps = reps
        self.work = work


    @timer_print
    def sync(self):
        for i in range(self.reps):
            self.work(i)


    @timer_print
    def manual_threaded(self):
        ''' good for io bound operations where cpu just waits '''
        threads = []
        for i in range(self.reps):
            thread = Thread(target=self.work, args=[str(i) + "si"])
            thread.start()
            threads.append(thread)
        for t in threads:
            t.join()

    @timer_print
    def thread_pool(self):
        ''' good for io tasks'''
        with concurrent.futures.ThreadPoolExecutor() as executor:
            results = executor.map(self.work, range(self.reps))

            for i in results:
                print(i)

    @timer_print
    def manual_process(self):
        processes = []
        for i in range(self.reps):
            p = multiprocessing.Process(target=self.work, args=[0])
            p.start()
            processes.append(p)
        # for waiting to complete
        for p in processes:
            p.join()
            print(p)

    @timer_print
    def process_pool(self):
        ''' good for io as well cpu tasks'''
        with concurrent.futures.ProcessPoolExecutor() as executor:
            results = executor.map(self.work, range(self.reps))

            for i in results:
                print(i)

    
    
    def execute(self):

        self.sync()
        self.manual_threaded()
        self.thread_pool()
        self.manual_process()
        self.process_pool()

reps = 100
# Execution(reps, Work.io_work).execute()
# Execution(reps, Work.cpu_work).execute()
Execution(reps, Work.test_nginx_docker_image).manual_threaded()
Execution(1000, Work.test_nginx_docker_image).manual_threaded()
Execution(reps, Work.test_nginx_docker_image).manual_threaded()





class DataService {
        data=[];

        async fetchData(pageObj) {
        if(!this.data.length)
        {
            const url="https://jsonplaceholder.typicode.com/photos";
            const response = await fetch(url);
            this.data= await response.json();
        }
        let startIndex=(pageObj.page*pageObj.size);

        return this.data.slice(startIndex,startIndex+pageObj.size);
    }
}
export default new DataService();
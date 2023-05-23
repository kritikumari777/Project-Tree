import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import {  AiTwotoneMail } from 'react-icons/ai'
import { FaBell, FaUnlock, FaUserCircle} from 'react-icons/fa'
import { IoIosRefresh } from 'react-icons/io'
import { RiBlurOffFill, RiDeleteBinFill, RiFilter2Fill} from 'react-icons/ri'

const RiderList = () => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    const getCountries = async () => {
        try{
          //https://restcountries.com/v2/all
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setCountries(response.data)
            setFilteredCountries(response.data)
        }
        catch(error){
          console.log(error)
        }
    };

    useEffect(() =>{
        getCountries()
    }, [])


    useEffect( () =>{
      const result = countries.filter((country) => {
        // return country.name.toLowerCase().match(search.toLowerCase());
        return country?.title?.toLowerCase().match(search.toLowerCase());
      })
      setFilteredCountries(result)
    }, [search])

    const columns = [
        // {name:"Country Name", selector: row => row.name, sortable: true},
        // {name:"Country Native Name", selector: row => row.nativeName},
        // {name:"Country Capital", selector: row => row.capital},
        // {name:"Country Flag", selector: (row) => <img width={50} height={50} src={row.flag}/>},  
        {name:"S.no", selector: row => row.id, sortable: true},
        {name:"Image", selector: (row) => <img width={50} height={50} src={row.url}/>},  
        {name:"title", selector: row => row.title},
        {name:"Action", cell: (row) => <button className='btn btn-primary' onClick={() => alert(row.title)}>Edit</button>}

    ]


  return (
    <div className='country'>
    <DataTable 
    title="Country List" 
    columns={columns} 
    data={filteredCountries} 
    pagination
    fixedHeader
    fixedHeaderScrollHeight='350px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover 
    actions={
      <div>
        <AiTwotoneMail/>
        <FaBell/>
        <FaUserCircle/>
        </div>
    } 
    subHeader
    subHeaderComponent ={
      <div className='subhader'> 
        <div><IoIosRefresh/>Refresh user</div>
        <div><RiDeleteBinFill/>Delet Rider</div>
        <div><RiBlurOffFill/>Block Rider</div>
        <div><FaUnlock/>Unblock Rider</div>
        <div><RiFilter2Fill/>Filter</div>
    <input className='w-25 form-control' type="text" placeholder='Search here'/>
    </div>
    }
    // subHeaderAlign='center'
    value={search}
    onChange = {(e) => setSearch(e.target.value)}
    />
  </div>
  )
}

export default RiderList
import PropTypes from 'prop-types'
import { useState, createContext, useContext, useEffect } from 'react';
import AuthContext from './AuthProvider';
import  { orderApiUrl } from '../Api/axios';
import axios from 'axios';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [historyLength, setHistoryLength] = useState(0)
    const {auth} = useContext(AuthContext)
    const userId = auth?.userId

    useEffect(() => {
        if (!userId) return;
        const fetchOrderHistory = async () => {
            try {
                const res = await axios.get(`${orderApiUrl}/${userId}`)
                if(res.status === 200){
                    const data = await res.data
                    const historyCount = data.items.length
                    setHistoryLength(historyCount)
                    setOrderHistory(data.items)
                }
            } catch (error) {
                console.log("Error loading Order History:", error.message)
            }
        }
        fetchOrderHistory()
    },[setHistoryLength, setOrderHistory, userId, auth])

  return (
    <OrderContext.Provider value={{
        orderHistory,
        setOrderHistory,
        historyLength,
        setHistoryLength
    }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
    children: PropTypes.node.isRequired
}
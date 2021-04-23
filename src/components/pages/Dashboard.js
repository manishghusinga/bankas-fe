import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Table } from 'reactstrap';
import { Store } from "../../store/store";
import { apis } from "../../service/api";
import { toast } from 'react-toastify';

function Dashboard() {
    const [storeState, dispatch] = useContext(Store);
    const [sortItem, sortResult] = useState([]);
    const [order, setOrder] = useState({});

    let history = useHistory();

    const getMisicList = _ => {
        apis.musicList()
            .then(resp => {
                if (!resp || !resp.success) {
                    goToHome()
                    return toast.error("something went wrong!")
                }

                sortResult(resp.data)
                dispatch({ type: 'musicList', reducer: 'musicList', payload: { musicList: resp.data } });
            });
    }

    useEffect(() => {
        getMisicList()
    }, []);

    const goToHome = () => {
        history.push({
            pathname: '/'
        });
    }

    const sortBy = (item, type) => {
        if (!type) return;

        //check currect state to decide sort type
        let result = [...sortItem];
        let ascending = false;
        if (order[item] === 'ascending') {
            ascending = true
        }
        let currentState = ascending ? "decending" : "ascending"
        setOrder({ [item]: currentState });

        //Object.keys(type).length will be one only.
        if (type.date) {
            sortByDate(result, item, ascending)
        }

        if (type.string) {
            sortByString(result, item, ascending);
        }

        if (type.number) {
            sortByNumber(result, item, ascending)
        }

        sortResult(result)
    }

    const sortByString = (result, item, ascending) => {
        return result.sort((a, b) => {
            var nameA = a[item].toUpperCase();
            var nameB = b[item].toUpperCase();

            if (ascending) {
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;

            } else {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
        });
    }

    const sortByNumber = (result, item, ascending) => {
        result.sort(function (a, b) {
            let itemA = a[item];
            let itemB = b[item];
            if (ascending) {
                return itemA - itemB;

            } else {
                return itemB - itemA;
            }
        });
    }

    const sortByDate = (result, item, ascending) => {
        result.sort(function (a, b) {
            let dateA = new Date(a[item]);
            let dateB = new Date(b[item]);
            if (ascending) {
                return dateA - dateB;

            } else {
                return dateB - dateA;
            }
        });
    }

    return (
        <div className="p-lg-5 p-2">
            <div className="mx-lg-5">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th onClick={() => sortBy("song", { string: true })}>
                                song
                            </th>
                            <th onClick={() => sortBy("artist", { string: true })}>
                                artist
                            </th>
                            <th onClick={() => sortBy("songReleaseDate", { date: true })}>
                                songReleaseDate
                            </th>
                            <th onClick={() => sortBy("playCount", { number: true })}>
                                playCount
                            </th>
                            <th onClick={() => sortBy("metricA", { number: true })}>
                                metricA
                            </th>
                            <th onClick={() => sortBy("metricB", { number: true })}>
                                metricB
                            </th>
                            <th onClick={() => sortBy("metricC", { number: true })}>
                                metricC
                            </th>
                            <th onClick={() => sortBy("metricD", { number: true })}>
                                metricD
                            </th>
                            <th onClick={() => sortBy("metricE", { number: true })}>
                                metricE
                            </th>
                            <th onClick={() => sortBy("metricF", { number: true })}>
                                metricF
                            </th>
                            <th onClick={() => sortBy("metricG", { number: true })}>
                                metricG
                            </th>
                            <th onClick={() => sortBy("metricH", { number: true })}>
                                metricH
                            </th>
                            <th onClick={() => sortBy("metricI", { number: true })}>
                                metricI
                            </th>
                            <th onClick={() => sortBy("metricJ", { number: true })}>
                                metricJ
                            </th>
                            <th onClick={() => sortBy("metricK", { number: true })}>
                                metricK
                            </th>
                            <th onClick={() => sortBy("metricL", { number: true })}>
                                metricL
                            </th>
                            <th onClick={() => sortBy("metricM", { number: true })}>
                                metricM
                            </th>
                            <th onClick={() => sortBy("metricN", { number: true })}>
                                metricN
                            </th>
                            <th onClick={() => sortBy("metricO", { number: true })}>
                                metricO
                            </th>
                            <th onClick={() => sortBy("metricP", { number: true })}>
                                metricP
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sortItem.map((item, index) =>
                                <tr key={index + "asdf"}>
                                    <td>{index + 1}</td>
                                    <td>{item.song}</td>
                                    <td>{item.artist}</td>
                                    <td>{item.songReleaseDate}</td>
                                    <td>{item.playCount}</td>
                                    <td>{item.metricA}</td>
                                    <td>{item.metricB}</td>
                                    <td>{item.metricC}</td>
                                    <td>{item.metricD}</td>
                                    <td>{item.metricE}</td>
                                    <td>{item.metricF}</td>
                                    <td>{item.metricG}</td>
                                    <td>{item.metricH}</td>
                                    <td>{item.metricI}</td>
                                    <td>{item.metricJ}</td>
                                    <td>{item.metricK}</td>
                                    <td>{item.metricL}</td>
                                    <td>{item.metricM}</td>
                                    <td>{item.metricN}</td>
                                    <td>{item.metricO}</td>
                                    <td>{item.metricP}</td>
                                </tr>
                            )}
                    </tbody>

                </Table>
            </div>
        </div>
    );
}

export default Dashboard;
import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'

const DATA = [
  { link: "http://google.com", title: "google", desc: "Lorem ipsum dolor sit amet", "status": "unread" },
  { link: "http://google.com", title: "google", desc: "Lorem ipsum dolor sit amet", "status": "unread" },
  { link: "http://google.com", title: "google", desc: "Lorem ipsum dolor sit amet", "status": "unread" },
  { link: "http://google.com", title: "google", desc: "Lorem ipsum dolor sit amet", "status": "unread" },
  { link: "http://google.com", title: "google", desc: "Lorem ipsum dolor sit amet", "status": "unread" }
]

export default class ListComponent extends Component {
  renderItem = ({ item }) => (
    <Text>
      {item.title}, {item.link}, {item.desc}, {item.status}
    </Text>
  )

  render() {
    return <FlatList data={DATA} renderItem={this.renderItem} />
  }
}

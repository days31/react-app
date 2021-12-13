import React, { Component } from 'react';
class UpdateContent extends Component {
    constructor(props) {
        super(props);

        this.title = 'aaa';
        this.desc = 'bbb';
        // 한꺼번에 여러개를 담을 수 있는 형태
        // 객체, 배열, 클래스
        this.state = {
            title: this.props.title,  // colon
            desc: this.props.desc
        };
    }
    render() {
        return (
            <article>
                <h2>Update Content</h2>
                <form action='/update_process' method='post'>
                    <p><input type='text' name='title'
                        value={this.state.title}
                        onChange={(e) => {
                            this.setState({title: e.target.value})
                        }}></input></p>
                    <p><textarea name='desc'
                        value={this.props.desc}></textarea></p>
                    <p><input type='submit'></input></p>
                </form>
            </article>
        )
    }
}
<p><textarea name='desc'
value={this.state.desc} onChange={( e )} => {
    this.setState.title({desc: </p>
export default UpdateContent;
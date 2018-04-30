import React from 'react';

export default function renderList(result){
		return(
			<div className="fluid"  key={result.id}>
				<div className="table-responsive">
					<table className="table table-bordered">
					    <tbody>
					      <tr>
					        <td className="col-xs-2">{result.id}</td>
					        <td className="col-xs-2">{result.name}</td>
					        <td className="col-xs-3">{result.full_name}</td>
					        <td className="col-xs-1">{result.stargazers_count}</td>
					        <td className="col-xs-2">{result.created_at}</td>
					        
					      </tr>
					    </tbody>
					 </table>
				 </div>
			</div>
		)
}

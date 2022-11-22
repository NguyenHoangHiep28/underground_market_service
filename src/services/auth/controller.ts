import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { NextFunction, Request, Response } from 'express';

export const create = (req: Request, res: Response, next: NextFunction) => {
	const { signature, publicAddress, nonce } = req.body;
	const msgBufferHex = bufferToHex(Buffer.from(nonce, 'utf8'));
	const address = recoverPersonalSignature({
		data: msgBufferHex,
		sig: signature,
	});
	// The signature verification is successful if the address found with
	// sigUtil.recoverPersonalSignature matches the initial publicAddress
	if (address.toLowerCase() === publicAddress.toLowerCase()) {
		res.status(200).send({
			body: 'Signature verification successfully!',
		});
	} else {
		res.status(401).send({
			error: 'Signature verification failed',
		});
	}
};
